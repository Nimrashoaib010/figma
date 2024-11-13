import React from "react";
import Image from "next/image";

export default function Project() {
    return (
        <div className="text-black border-l semi-bold text-center">Projects
            <Image src="/projects.png" alt="projects" width={992} height={1892}></Image>
        </div>
    )
}