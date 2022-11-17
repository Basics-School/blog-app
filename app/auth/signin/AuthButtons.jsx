'use client'


import { GoogleIcon, FacebookIcon, TwitterIcon } from "../../../components/icons";
import { signIn } from "next-auth/react";
import styles from "./Auth.module.css";

const AuthButtons = () => {
    const providers = [
        {
            name: "github",
            Icon: GoogleIcon,
            color: "bg-rose-500",
        },
        {
            name: "twitter",
            Icon: TwitterIcon,
            color: "bg-blue-500",
        },
        {
            name: "facebook",
            Icon: FacebookIcon,
            color: "bg-blue-500",
        },
    ];
    return (
        <div className={`${styles.buttons} `}>
            {providers.map(({ name, Icon, color }) => (
                <button
                    onClick={() =>
                        signIn(name, { callbackUrl: process.env.NEXTAUTH_URL })
                    }
                    key={name}
                    className={`${styles.button_custom} ${color}  `}
                    type='button'>
                    <p>Sign In with {name}</p>
                    <Icon className={styles.icons} alt={name} />
                </button>
            ))}
        </div>
    );
};

export default AuthButtons;