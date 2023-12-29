import React from "react";
import LinkItem from "../../components/LinkItem";
import FacebookIcon from '/public/icons/icon-facebook.svg';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa"; 
import PinterestIcon from '/public/icons/icon-pinterest.svg';
import InstagramIcon from '/public/icons/icon-instagram.svg';

const socials = [
    {
        name: 'Discord',
        icon: <FaDiscord style={{
            color: '#7289da',
            fontSize: '1.5rem',
        }} />,
        href: 'https://discord.gg/mnYVSpR3tw/',
    },
];

const SocialContainer = () => {
    return (
        <>
            {socials?.map(({icon, ...props}, index) => (
                <LinkItem {...props}>
                    {icon}
                </LinkItem>
            ))}
        </>
    );
};

export default SocialContainer;
