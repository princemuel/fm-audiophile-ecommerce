import {
  ImageThumbnailEarphonePNG,
  ImageThumbnailHeadphonePNG,
  ImageThumbnailSpeakerPNG,
} from '@/common';
import type { Metadata } from 'next';
import { HomeTemplate } from './home';

const images = [
  { url: ImageThumbnailEarphonePNG.src, alt: 'Earphone' },
  { url: ImageThumbnailHeadphonePNG.src, alt: 'Headphone' },
  { url: ImageThumbnailSpeakerPNG.src, alt: 'Speaker' },
];

export const metadata: Metadata = {
  title: 'Audiophile | Home',
  description:
    'Browse and purchase the best audio devices on the market located at the heart of New York City. Audiophile is a premier online store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. This web application presents the products using the most user-friendly format with accessibility in mind.',
  keywords: ['E-Commerce', 'Audio Devices'],
  openGraph: {
    type: 'website',
    title: 'Audiophile',
    description:
      'Browse and purchase the best audio devices on the market located at the heart of New York City. Audiophile is a premier online store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. This web application presents the products using the most user-friendly format with accessibility in mind.',
    images: images.map((image) => ({
      url: image.url,
      alt: image.alt,
      type: 'image/jpeg',
      width: 400,
      height: 400,
    })),
  },
  twitter: {
    title: 'Audiophile',
    description:
      'Browse and purchase the best audio devices on the market located at the heart of New York City. Audiophile is a premier online store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment. This web application presents the products using the most user-friendly format with accessibility in mind.',
    images: images.map((image) => ({
      url: image.url,
      alt: image.alt,
      type: 'image/jpeg',
      width: 400,
      height: 400,
    })),
  },
};

export default function PageRoute() {
  return (
    <main className='flex flex-col gap-60'>
      <HomeTemplate />
    </main>
  );
}
