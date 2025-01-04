import { HoverEffect } from "./ui/Card-Hover-Effecs";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

const descriptions = "Akses Drive SMK MUTU dengan menggunakan akun belajar.id Guru masing-masing";

export const projects = [
  {
    title: "Ahan A",
    description: descriptions,
    link: "https://drive.google.com/drive/folders/1R57oa-eveYA9A5eogsuDTaT7tEy7LtLm?usp=sharing",
  },
  {
    title: "Suhirya",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/18b3Vkp2t6TtWrh5P_iG0gr6OOQVebQEf?usp=drive_link",
  },
  {
    title: "Irawan",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1Z98vhMy27J_N85-GBl6EH4YXRaq13DM4?usp=sharing",
  },
  {
    title: "Risky Aspiah",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/15h2_2IiuKyuze_XcoNa7WhRzkoM8zKHJ?usp=drive_link",
  },
  {
    title: "Yuli Fajrianti",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1X6ePnM4HbP-ydGQX2SKe-ljfL9YX-cia?usp=drive_link",
  },
  {
    title: "Hendra Mulfi",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1ULltZnfXMFUBeiNj9AX-ztFeyFXwidiW?usp=drive_link",
  },
  {
    title: "Luti Handyani",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1jZ-xN2xBs9N77Ic4Nqik0na_7nyHqGSo?usp=drive_link",
  },
  {
    title: "Setiawan M Lail",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1OW4OfzCpmCanFHHk9qDBgwtpBCj7yvje?usp=drive_link",
  },
  {
    title: "Sofiatul ",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1heeWEImAq3yoqTVGvQJXe9DUoL9-c5YV?usp=drive_link",
  }, {
    title: "Abid Syahni",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1c-c8Ks3b9O-A1ibhBQdVSX-GzWs-ufd_?usp=drive_link",
  },
  {
    title: "Yuni Gustina",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1-Dgu5lChd9HWPlhXfUGYYSRTYHVB7Gro?usp=drive_link",
  },
  {
    title: "Jahrah",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1pDVjUxWoGtt3yYduoQEoQTGg35mfRE_6?usp=drive_link",
  },
  {
    title: "Yuliana",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/16bfGzsiwynzrDkcemnwrxvN_e8iAe0gh?usp=drive_link",
  },
  {
    title: "Ratna Destriani",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1nnSLsiG-7SkhyX03rzowRyO8UghxHGLJ?usp=drive_link",
  },
  {
    title: "Maryanto",
    description:
      descriptions,
    link: "https://drive.google.com/drive/folders/1A9CKUmaE_B7WyYzLs_KlTHXOq-G9juIs?usp=drive_link",
  },

];
