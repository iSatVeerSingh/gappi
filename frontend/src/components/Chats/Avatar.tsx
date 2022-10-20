import Image from 'next/image';

type AvatarProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Avatar = ({ src, className, alt }: AvatarProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-full ${
        className ? className : 'w-full h-full'
      }`}
    >
      <Image src={src} alt={alt} layout='fill' objectFit='contain' />
    </div>
  );
};

export default Avatar;
