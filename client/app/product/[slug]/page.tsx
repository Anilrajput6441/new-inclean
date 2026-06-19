import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import RevealOnScroll from "@/app/utils/RevealOnScroll";
import { products } from "@/data/siteContent";
import { createMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  const canonicalPath =
    product.slug === "air-handling-unit"
      ? "/product/ahu"
      : `/product/${product.slug}`;

  return createMetadata({
    title: product.name,
    description: product.summary,
    path: canonicalPath,
    images: [product.image],
  });
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#F7F7F7] min-h-screen">
      <section className="flex min-h-screen flex-col pt-28 md:flex-row md:pt-16">
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="flex h-full w-full flex-col justify-center px-8 md:w-[58vw] md:px-20">
            <Link href="/product" className="mb-8 lato-medium text-cyan-700">
              Products
            </Link>
            <h1 className="lato-regular text-[58px] leading-tight md:text-[112px]">
              {product.name}
            </h1>
            <p className="mt-8 max-w-2xl lato-medium text-xl text-gray-700">
              {product.summary}
            </p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll direction="down" delay={0.2}>
          <div className="relative mx-auto h-[55vh] w-[88vw] overflow-hidden md:my-auto md:h-[70vh] md:w-[36vw]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              loading="lazy"
              sizes="(min-width: 768px) 36vw, 88vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 text-lg text-gray-800">
        {product.intro.map((paragraph) => (
          <p key={paragraph} className="mb-6 leading-8">
            {paragraph}
          </p>
        ))}

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {product.sections.map((section) => (
            <div key={section.title} className="border-t border-gray-400 pt-6">
              <h2 className="lato-medium text-3xl text-black">
                {section.title}
              </h2>
              <p className="mt-4 leading-8 text-gray-700">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
