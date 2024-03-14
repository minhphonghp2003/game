"use client";
import React from "react";

function Card({ image, name, title, link }) {
    return (
        <div className="flex flex-col items-center">
            <img className="hover:rotate-45 duration-1000 rounded-full w-[13rem]" src={image} />
            <p className="text-center my-2 font-bold text-[1.3rem]"> {name}</p>
            <p className="text-center my-1 font-bold text-gray-500 text-[0.9rem]">
                {" "}
                {title}
            </p>
            <a
                className="block text-gray-400 text-center text-[0.9rem]"
                href={link}
            >
                Read more
            </a>
        </div>
    );
}

function Contact() {
    return (
        <div className="mt-8 ">
            <p className="text-center font-bold text-[2rem] w-[50%] m-auto">
                Dưới đây là chú Thái và đồng bọn đã chung tay làm ra sản phẩm
                này
            </p>
            <p className="text-center text-gray-400">
                Như đã bàn thì mọi vấn đề về pháp lí sẽ được chú Thái chịu trách
                nhiệm 📑📑{" "}
            </p>
            <div className="my-12 flex justify-between w-[50%] m-auto">
                <Card
                    image="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-1/95013599_693898951362130_4318571895092936704_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFjqqr-YA050vEuO557tn2DQ56IGqstz_tDnogaqy3P-3Ha4Y6EbGXhd16ifvlWjXvA9L7S9XuQ91uJ34cWRMsB&_nc_ohc=BwZBxr20jrMAX-4Trbk&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAVcM088wc59OTUOXS9WFgHHxIMhvv8m1u9v02Y3TjlOA&oe=660ABB92"
                    name="Chú Thái"
                    title="MALWARE DEV (LEADER)"
                    link="https://www.facebook.com/MiTaaaa131"
                />
                <Card
                    image="https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.18169-1/22046855_116529149097266_661504131062317226_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFoMMbWPY39PAm8Yx0GTcDydEljo9_VQGx0SWOj39VAbPV1x8tpuw-zs9gBw-9me3Q18VC7qM7zJ9QqqtLBQCn9&_nc_ohc=6Iiecr9W49cAX9KGNTN&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBIfZGAChGmCMoXJbr35vjyofeyJnNDSUmuoEBprjxLBA&oe=660AC320"
                    name="Ng0c Ph0ng"
                    title="MALWARE DEV"
                    link="https://www.facebook.com/kmaat18ntrngphong"
                />
                <Card
                    image="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/400434002_2056527118030233_5728908554993856374_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH8hVbh-_bq0Ota4FAvngk5pPxO1RkiUXak_E7VGSJRduo3-OzBofLSaOvBzx086nAxuMFmkYZn2mh2dhz0fvg8&_nc_ohc=ZdYL3VZo2cAAX8KsLWY&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBH4FxaM4RwHtW5Ujm4pXH9AiDPWYKiHC8SZNz-2dorSQ&oe=65F7D9E6"
                    name="Tài Nguyên"
                    title="MALWARE DEV"
                    link="https://www.facebook.com/neyugniat1607"
                />
            </div>
            <div className="flex justify-center gap-16">
                <Card
                    image="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFkIxDmqvIbxC_74JVjc1SKso2H55p0AlGyjYfnmnQCUXSkwPjrdBLR_HPhtLUqFUohA5tfQ_Y9k-7GOuHUDltJ&_nc_ohc=BGM03v5QUNkAX8Cyu10&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBvqjWBZMbuwIkwWQ-oXLew9as6Jd6bvGehSk--BZdFXA&oe=660A92B8"
                    name="Phước An "
                    title="WEB DEV"
                    link="https://www.facebook.com/Phuocan3010"
                />

                <Card
                    image="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFkIxDmqvIbxC_74JVjc1SKso2H55p0AlGyjYfnmnQCUXSkwPjrdBLR_HPhtLUqFUohA5tfQ_Y9k-7GOuHUDltJ&_nc_ohc=BGM03v5QUNkAX8Cyu10&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfBvqjWBZMbuwIkwWQ-oXLew9as6Jd6bvGehSk--BZdFXA&oe=660A92B8"
                    name="Minh Phong"
                    title="WEB DEV"
                    link="https://www.facebook.com/profile.php?id=100071881584031"
                />
            </div>
        </div>
    );
}

export default Contact;
