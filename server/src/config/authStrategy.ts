import User from '../models/userModel'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

export const loadAuthStrategy = () => {
	passport.use(User.createStrategy())

	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID as string,
				clientSecret: process.env.GOOGLE_CLIENT_SECRETS as string,
				callbackURL: 'http://localhost:8000/api/auth/google/callback',
			},
			async (accessToken, refreshToken, profile, cb) => {
				const update = {
					email: profile._json.email,
					username: `${profile.name?.familyName}-${profile.id}`,
					avatar: profile._json.picture,
				}

				const options = {
					upsert: true,
					new: true,
					rawResult: true,
				}

				const user = await User.findOneAndUpdate({ googleId: profile.id }, update, options)

				if (!user) {
					return cb(new Error('Something went wrong'))
				}

				return cb(null, user)
			}
		)
	)
}
