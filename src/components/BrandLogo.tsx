type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center ${compact ? 'gap-2' : 'gap-3'}`}>
      <span className={`flex items-center justify-center overflow-hidden rounded-small bg-white shadow-[0_6px_18px_rgba(0,0,0,0.18)] ${compact ? 'h-8 w-8 p-0.5' : 'h-10 w-10 p-1'}`}>
        <img
          src="/WhatsApp_Image_2026-10-17_at_14.00.00.jpeg"
          alt="BOMERGRUP logo"
          className="h-full w-full object-contain"
        />
      </span>
      <span className="text-platinum text-lg font-medium tracking-tight">
        BOMER<span className="text-bioluminescent">GRUP</span>
      </span>
    </span>
  );
}
