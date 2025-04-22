"use client";
import AOS from 'aos';
import { useEffect } from 'react';

export default function Aos() {
    useEffect(() => {
        AOS.init({
            duration: 1400,
            // easing: "ease-in-out-cubic"
        });
    }, [])
    return <></>
}