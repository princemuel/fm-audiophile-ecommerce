import { cn, formatPrice, shimmer, toBase64 } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import { Button, ResponsiveImage, Text } from '../atoms';

interface Props {
  product: IProduct;
  priority: boolean;
  cart?: boolean;
}

const ProductCard = ({ product, priority, cart }: Props) => {
  return (
    <article
      className={cn(
        'flex flex-col items-center gap-20',
        cart ? 'sm:flex-row' : 'md:flex-row even:md:flex-row-reverse'
      )}
    >
      <ResponsiveImage
        src={''}
        alt=''
        container={cn('flex-1 overflow-clip rounded-brand')}
      >
        <picture>
          <source
            media='(min-width: 40em)'
            srcSet={product?.categoryImage?.desktop}
          />
          <source
            media='(min-width: 36em)'
            srcSet={product?.categoryImage?.tablet}
          />
          <source srcSet={product?.categoryImage?.mobile} />
          <Image
            src={product?.categoryImage?.mobile}
            width={700}
            height={475}
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            sizes='100vw'
            alt={product.name}
            priority={priority}
          />
        </picture>
      </ResponsiveImage>

      <div
        className={cn(
          'flex flex-1 flex-col gap-12',
          cart ? '' : 'items-center text-center md:items-start md:text-left'
        )}
      >
        {product?.new && (
          <Text
            as='h4'
            variant={'secondary'}
            size={'sx'}
            uppercase
            aria-live='polite'
          >
            New Product
          </Text>
        )}

        <Text
          as='h1'
          variant={'primary'}
          size={'2xl'}
          weight={'bold'}
          aria-live='polite'
        >
          {product?.name}
        </Text>

        <Text as='p' variant={'primary/50'}>
          {product?.description}
        </Text>

        {cart && (
          <Text as='p' variant={'primary'}>
            {formatPrice(product?.price)}
          </Text>
        )}

        <div className='flex items-center gap-6'>
          {cart ? (
            <>
              <div className='flex items-center gap-4 bg-zinc-50'>
                <Button type='button' variant={'counter'} size={'sm'}>
                  <span>&#x2212;</span>
                </Button>
                <Text
                  as='output'
                  variant={'primary'}
                  size={'xs'}
                  weight={'bold'}
                >
                  1
                </Text>
                <Button type='button' variant={'counter'} size={'sm'}>
                  &#43;
                </Button>
              </div>
              <Button type='button' uppercase={true}>
                Add to cart
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link
                href={`/${product.category}/${product?.slug}`}
                className='uppercase'
              >
                See Product
              </Link>
            </Button>
          )}
          {/* <Button type='button' variant={'neutral'}>
            Add to cart
          </Button>
          <Button type='button' variant={'chevron'} size={'none'}>
            <span>Shop</span>
            <icons.chevron.right />
          </Button> */}
        </div>
      </div>
    </article>
  );
};

export { ProductCard };
