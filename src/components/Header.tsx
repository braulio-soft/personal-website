"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'
import { person, home, about, blog, work, gallery ,skill} from '@/app/resources/content';

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            };
            const timeString = new Intl.DateTimeFormat(locale, options).format(now);
            setCurrentTime(timeString);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone, locale]);

    return (
        <>
            {currentTime}
        </>
    );
};

export default TimeDisplay;

export const Header = () => {
    const pathname = usePathname() ?? '';

    return (
        <>
            <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9}/>
            <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9}/>
            <Flex
                fitHeight
                className={styles.position}
                as="header"
                zIndex={9}
                fillWidth padding="8"
                justifyContent="center">
                <Flex
                    paddingLeft="12" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    { display.location && (
                        <Flex hide="s">
                            {person.location}
                        </Flex>
                    )}
                </Flex>
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium"  radius="m-4" shadow="l"
                        padding="4"
                        justifyContent="center">
                        <Flex
                            gap="4"
                            textVariant="body-default-s">
                            { routes['/'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="home"
                                        href="/"
                                        label={home.label}
                                        selected={pathname === "/"}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="home"
                                        href="/"
                                        selected={pathname === "/"}/>
                                </>
                            )}
                            { routes['/about'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="person"
                                        href="/about"
                                        label={about.label}
                                        selected={pathname === "/about"}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="person"
                                        href="/about"
                                        selected={pathname === "/about"}/>
                                </>
                            )}
                            { routes['/work'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="grid"
                                        href="/work"
                                        label={work.label}
                                        selected={pathname.startsWith('/work')}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="grid"
                                        href="/work"
                                        selected={pathname.startsWith('/work')}/>
                                </>
                            )}
                            { routes['/skill'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="check"
                                        href="/skill"
                                        label={skill.label}
                                        selected={pathname.startsWith('/skill')}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="check"
                                        href="/slill"
                                        selected={pathname.startsWith('/skill')}/>
                                </>
                            )}
                            
                        </Flex>
                    </Flex>
                </Flex>
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                    <Flex
                        paddingRight="12"
                        justifyContent="flex-end" alignItems="center"
                        textVariant="body-default-s"
                        gap="20">
                        <Flex hide="s">
                            { display.time && (
                                <TimeDisplay timeZone={person.location}/>
                            )}
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}