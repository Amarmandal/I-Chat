import { Router } from "express"
import passport from "passport"
import { authenticateWithGoogle } from "../controllers/authControllers"

const router = Router()

router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }))

router.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		failureRedirect: "/login",
		session: false,
	}),
	authenticateWithGoogle
)

router.get("/auth/test", (req, res) => {
	res.status(200).json({ userInfo: req.user })
})

export default router
