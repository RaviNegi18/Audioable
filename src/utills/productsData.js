// white head
import mainImg from "../assets/whitehead/desktop/image-category-page-preview.jpg";
import white1 from "../assets/whitehead/desktop/image-gallery-1.jpg";
import white2 from "../assets/whitehead/desktop/image-gallery-2.jpg";
import white3 from "../assets/whitehead/desktop/image-gallery-3.jpg";
import Ear1 from "../assets/boat.jpg";
// black head
import mainBlackImg from "../assets/blackhead/desktop/image-category-page-preview-black.jpg";
import black1 from "../assets/blackhead/desktop/image-gallery-1-black.jpg";
import black2 from "../assets/blackhead/desktop/image-gallery-2-black.jpg";
import black3 from "../assets/blackhead/desktop/image-gallery-3-black.jpg";

// mark2 headphones
import mainMark2 from "../assets/mark2headphones/desktop/image-category-page-preview.jpg";
import mark2_1 from "../assets/mark2headphones/desktop/image-gallery-1.jpg";
import mark2_2 from "../assets/mark2headphones/desktop/image-gallery-2.jpg";
import mark2_3 from "../assets/mark2headphones/desktop/image-gallery-3.jpg";

// zx7 speaker
import mainZX7 from "../assets/zx7speaker/desktop/image-category-page-preview.jpg";
import zx7_1 from "../assets/zx7speaker/desktop/image-gallery-1.jpg";
import zx7_2 from "../assets/zx7speaker/desktop/image-gallery-2.jpg";
import zx7_3 from "../assets/zx7speaker/desktop/image-gallery-3.jpg";

// yx earphones
import mainYX from "../assets/yxearphones/desktop/image-category-page-preview.jpg";
import yx_1 from "../assets/yxearphones/desktop/image-gallery-1.jpg";
import yx_2 from "../assets/yxearphones/desktop/image-gallery-2.jpg";
import yx_3 from "../assets/yxearphones/desktop/image-gallery-3.jpg";

// product-zx9-speaker
import mainZX9 from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx9_1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import zx9_2 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import zx9_3 from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";



//recomended

import whiteheads from "../assets/Recomended/whiteheads.jpg";
import blackhead from "../assets/Recomended/blackheads.jpg";
import blackspeak from "../assets/Recomended/blackspeaks.jpg";
import goldHead from "../assets/Recomended/goldhead.jpg";
import blackspeak1 from "../assets/Recomended/blackspeak1.jpg";


export const storeData = [
  {
    id: 1,
    slug: "xx99-mark-ii-headphones",
    title: "XX99 Mark II ",
    subTitle: "New Product",
    type: "headphone",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: mainImg,
    reverse: false,
    price: "$1,750",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation.",
    feat:
      "The advanced Active Noise Cancellation with built-in equalizer allows you to experience your audio world on your terms. Combined with Bluetooth 5.0 connectivity and 17-hour battery life, the XX99 Mark II headphones give you superior sound, cutting-edge technology, and a modern design aesthetic.",
    content: [
      "1x Headphone unit",
      "2x Replacement earcups",
      "1x User manual",
      "1x 3.5mm 5m audio cable",
      "1x Travel bag",
    ],
    fullImages: [white1, white2, white3],
    recomended: [
      {
        slug: "xx99-mark-i-headphones",
        title: "XX99 Mark I ",
        image: whiteheads,
      },
      {
        slug: "xx59-headphones",
        title: "XX59 Headphones",
        image: goldHead,
      },
      {
        slug: "zx9-speaker",
        title: "ZX9 Speaker",
        image: blackspeak,
      },
    ],
  },
  {
    id: 2,
    slug: "xx99-mark-i-headphones",
    title: "XX99 Mark I Headphones",
    subTitle: "New Product",
    type: "headphone",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike.Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image: mainBlackImg,
    reverse: true,
    price: "$1,950",
    features:
      "Crafted with precision components, the XX99 Mark I ensures an authentic listening experience for professionals and enthusiasts alike.",
    feat:
      "With a focus on sonic clarity and comfort, it’s ideal for long studio sessions or immersive listening at home.",
    content: [
      "1x Headphone unit",
      "2x Replacement earcups",
      "1x User manual",
      "1x 3.5mm 5m audio cable",
    ],
    fullImages: [black1, black2, black3],
    recomended: [
      {
        slug: "xx99-mark-ii-headphones",
        title: "XX99 Mark II ",
        image: whiteheads,
      },
      {
        slug: "xx59-headphones",
        title: "XX59 Headphones",
        image: goldHead,
      },
      {
        slug: "zx7-speaker",
        title: "ZX7 Speaker",
        image: blackspeak1,
      },
    ],
  },
  {
    id: 3,
    slug: "xx59-headphones",
    title: "XX59 Headphones",
    subTitle: "New Product",
    type: "headphone",
    description:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: mainMark2,
    reverse: false,
    price: "$3,750",
    features:
      "Lightweight and portable, the XX59 provides balanced sound with solid bass and clean highs. Designed for travel and daily use.",
    feat:
      "Features built-in microphones for hands-free calling and intuitive touch controls with 30-hour battery life.",
    content: [
      "1x Headphone unit",
      "2x Replacement earcups",
      "1x User manual",
      "1x 3.5mm 5m audio cable",
    ],
    fullImages: [mark2_1, mark2_2, mark2_3],
    recomended: [
      {
        slug: "xx99-mark-i-headphones",
        title: "XX99 Mark I",
        image: whiteheads,
      },
      {
        slug: "xx99-mark-ii-headphones",
        title: "XX99 Mark II",
        image: goldHead,
      },
      {
        slug: "zx7-speaker",
        title: "ZX7 Speaker",
        image: blackspeak1,
      },
    ],
  },
  {
    id: 4,
    slug: "zx7-speaker",
    title: "ZX7 Speaker",
    subTitle: "New Product",
    type: "speaker",
    description:
      "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    image: mainZX7,
    reverse: false,
    price: "$3,500",
    features:
      "Delivering deep bass and crisp treble with a timeless design and wireless Bluetooth connectivity.",
    feat:
      "ZX7 provides superior sound clarity with flexible setup options, suitable for any environment.",
    content: ["1x Speaker unit", "1x Power cable", "1x User manual"],
    fullImages: [zx7_1, zx7_2, zx7_3],
    recomended: [
      {
        slug: "zx9-speaker",
        title: "ZX9 Speaker",
        image: blackspeak,
      },
      {
        slug: "xx99-mark-ii-headphones",
        title: "XX99 Mark II ",
        image: whiteheads,
      },
      {
        slug: "yx-earphones",
        title: "YX Earphones",
        image: blackhead,
      },
    ],
  },
  {
    id: 5,
    slug: "yx-earphones",
    title: "YX Earphones",
    subTitle: "New Product",
    type: "earphone",
    description:
      "Experience clear, distortion-free audio with ergonomic design for comfortable long listening.",
    image: mainYX,
    reverse: false,
    price: "$599",
    features:
      "Compact, durable, and equipped with noise isolation for premium listening on the go.",
    feat:
      "Built with aluminum housing and premium drivers to ensure balanced sound with crystal clarity.",
    content: ["1x Earphones", "2x Ear tips", "1x Carry pouch", "1x User manual"],
    fullImages: [yx_1, yx_2, yx_3],
    recomended: [
      {
        slug: "zx7-speaker",
        title: "ZX7 Speaker",
        image: blackspeak1,
      },
      {
        slug: "xx59-headphones",
        title: "XX59 Headphones",
        image: goldHead,
      },
      {
        slug: "zx9-speaker",
        title: "ZX9 Speaker",
        image: blackspeak,
      },
    ],
  },
  {
    id: 6,
    slug: "zx9-speaker",
    title: "ZX9 Speaker",
    subTitle: "New Product",
    type: "speaker",
    description:
     "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    image: mainZX9,
    reverse: false,
    price: "$4,500",
    features:
      "ZX9 uses dual subwoofers and precision-tuned drivers to deliver stunning sound across all frequencies.",
    feat:
      "Experience immersive, distortion-free sound powered by advanced acoustic technology and Bluetooth 5.1.",
    content: ["1x Speaker unit", "1x Power cable", "1x User manual"],
    fullImages: [zx9_1, zx9_2, zx9_3],
    recomended: [
      {
        slug: "zx7-speaker",
        title: "ZX7 Speaker",
        image: blackspeak1,
      },
      {
        slug: "xx99-mark-ii-headphones",
        title: "XX99 Mark II ",
        image: whiteheads,
      },
      {
        slug: "yx-earphones",
        title: "YX Earphones",
        image: blackhead,
      },
    ],
  },
  {
    id: 7,
    slug: "boat-earphones",
    title: "Boat Earphones",
    subTitle: "New Product",
    type: "earphone",
    description:
      "Experience the perfect balance of bass and clarity with Boat Earphones. Designed for music lovers who want powerful sound in a sleek, compact design.",
    image: Ear1,
    reverse: false,
    price: "$499",
    features:
      "Built for all-day comfort with ergonomic ear tips and tangle-free cables. Equipped with an inline mic and multi-function button for easy calls and playback control.",
    feat:
      "Boat Earphones deliver immersive sound with rich bass, crystal-clear highs, and passive noise cancellation for uninterrupted listening wherever you go.",
    content: [
      "1x Earphones",
      "3x Ear tip sizes",
      "1x Carry pouch",
      "1x User manual",
    ],
    fullImages: [yx_1, yx_2, yx_3],
    recomended: [
      {
        slug: "yx-earphones",
        title: "YX Earphones",
        image: mainYX,
      },
      {
        slug: "xx59-headphones",
        title: "XX59 Headphones",
        image: goldHead,
      },
      {
        slug: "zx7-speaker",
        title: "ZX7 Speaker",
        image: blackspeak1,
      },
    ],
  },
];
