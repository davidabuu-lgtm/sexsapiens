import React, { useState, useEffect, useRef } from 'react';
import { Upload, RefreshCw, Check } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  inverted?: boolean;
  className?: string;
  onClick?: () => void;
  allowUpload?: boolean;
}

export const SexsapiensLogo: React.FC<LogoProps> = ({
  size = 'md',
  showSubtitle = false,
  inverted = false,
  className = '',
  onClick,
  allowUpload = true,
}) => {
  const [logoSrc, setLogoSrc] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const [activeVariant, setActiveVariant] = useState<'bubble' | 'pill'>('bubble');
  const [showUploader, setShowUploader] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load custom logo from localStorage or try /sexsapiens.png
  useEffect(() => {
    try {
      const stored = localStorage.getItem('sexsapiens_custom_logo');
      const savedVariant = localStorage.getItem('sexsapiens_logo_variant') as 'bubble' | 'pill' | null;
      if (savedVariant) {
        setActiveVariant(savedVariant);
      }
      if (stored) {
        setLogoSrc(stored);
      } else {
        setLogoSrc('/sexsapiens.png');
      }
    } catch {
      setLogoSrc('/sexsapiens.png');
    }
  }, []);

  // Handle local user upload of sexsapiens.png
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setLogoSrc(dataUrl);
        setImgError(false);
        try {
          localStorage.setItem('sexsapiens_custom_logo', dataUrl);
        } catch {
          // ignore quota error
        }
        setShowUploader(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetToVector = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      localStorage.removeItem('sexsapiens_custom_logo');
    } catch {
      // ignore
    }
    setLogoSrc(null);
    setImgError(true);
    setShowUploader(false);
  };

  const handleToggleVariant = (variant: 'bubble' | 'pill', e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveVariant(variant);
    try {
      localStorage.setItem('sexsapiens_logo_variant', variant);
    } catch {
      // ignore
    }
  };

  // Dimensions configuration for responsive scaling
  const dimensions = {
    sm: { width: 130, height: 44, fontSize: 18, rx: 20 },
    md: { width: 165, height: 54, fontSize: 22, rx: 24 },
    lg: { width: 210, height: 68, fontSize: 28, rx: 28 },
    xl: { width: 260, height: 84, fontSize: 34, rx: 34 },
  };

  const { width, height, fontSize, rx } = dimensions[size];

  // If a real image exists and has not errored, display the uploaded/static image
  const hasValidImage = logoSrc && !imgError;

  return (
    <div
      className={`relative inline-flex flex-col items-start select-none group/logo ${className}`}
    >
      <div
        onClick={onClick}
        className={`relative flex items-center transition-transform duration-200 group-hover/logo:scale-[1.02] ${
          onClick ? 'cursor-pointer' : ''
        }`}
        title="Sexsapiens • Salud, placer y goce sexual"
      >
        {hasValidImage ? (
          <img
            src={logoSrc}
            alt="Logo oficial de Sexsapiens"
            style={{ width: `${width}px`, height: 'auto', maxHeight: `${height * 1.2}px` }}
            className="object-contain drop-shadow-xs"
            onError={() => {
              // If /sexsapiens.png doesn't exist yet on disk, fallback seamlessly to clean vector
              setImgError(true);
            }}
          />
        ) : (
          /* High-precision clean vector logo */
          <svg
            width={width}
            height={height}
            viewBox="0 0 220 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-xs"
          >
            <defs>
              {/* Vibrant warm brand pink gradient matching Sexsapiens palette */}
              <linearGradient id="sexsapiensPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B9D" />
                <stop offset="100%" stopColor="#FA8BBF" />
              </linearGradient>
            </defs>

            {activeVariant === 'bubble' ? (
              /* Smooth organic dialogue bubble (globo de conversación con curva fluida) */
              <path
                d="M 32 8 
                   H 188 
                   C 204 8, 214 18, 214 34 
                   C 214 50, 204 60, 188 60 
                   H 46 
                   C 36 60, 26 64, 16 68 
                   C 22 61, 23 56, 23 50 
                   C 12 46, 6 38, 6 27 
                   C 6 16, 17 8, 32 8 Z"
                fill="url(#sexsapiensPinkGrad)"
                className="transition-all duration-300"
              />
            ) : (
              /* Smooth organic capsule / pill badge */
              <rect
                x="6"
                y="10"
                width="208"
                height="52"
                rx={rx}
                fill="url(#sexsapiensPinkGrad)"
                className="transition-all duration-300"
              />
            )}

            {/* Crisp, rounded lowercase typographic brand wordmark */}
            <text
              x="110"
              y="38"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#FFFFFF"
              style={{
                fontFamily: "'Comfortaa', 'Quicksand', 'Plus Jakarta Sans', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: `${fontSize}px`,
                letterSpacing: '-0.4px',
              }}
            >
              sexsapiens
            </text>
          </svg>
        )}
      </div>

      {showSubtitle && (
        <span
          className={`text-[11px] sm:text-xs font-bold tracking-wide mt-1 pl-1 ${
            inverted ? 'text-[#FCE7F3]' : 'text-[#BE185D]'
          }`}
        >
          Salud, placer y goce sexual!
        </span>
      )}

      {/* Discreet Logo Customizer / Image Uploader for User's exact sexsapiens.png file */}
      {allowUpload && (
        <div className="absolute -top-1 -right-7 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-150 z-30 flex items-center gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowUploader(!showUploader);
            }}
            className="w-6 h-6 rounded-full bg-white border border-[#FCE7F3] shadow-xs text-[#BE185D] hover:bg-[#FFF1F2] flex items-center justify-center text-[10px]"
            title="Ajustar logo o cargar sexsapiens.png"
            aria-label="Ajustar logo"
          >
            <Upload className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Popover when uploader is toggled */}
      {showUploader && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-full left-0 mt-2 w-64 p-3 bg-white rounded-2xl shadow-xl border border-[#FCE7F3] z-50 text-xs flex flex-col gap-2.5 animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-[#FCE7F3]">
            <span className="font-bold text-[#18181B]">Logo de Sexsapiens</span>
            <button
              onClick={() => setShowUploader(false)}
              className="text-[#9CA3AF] hover:text-[#18181B] font-bold text-xs"
            >
              ✕
            </button>
          </div>

          <div>
            <label className="block text-[11px] text-[#6B7280] mb-1.5 font-medium">
              Cargar tu archivo original (<code className="text-[#BE185D]">sexsapiens.png</code>):
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/svg+xml,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full py-1.5 px-3 rounded-xl bg-[#FFF1F2] hover:bg-[#FCE7F3] text-[#BE185D] border border-[#F472B6]/40 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Seleccionar sexsapiens.png</span>
            </button>
          </div>

          <div className="pt-1">
            <span className="block text-[11px] text-[#6B7280] mb-1 font-medium">
              O elige la variante del vector:
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={(e) => handleToggleVariant('bubble', e)}
                className={`py-1 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 border transition-colors ${
                  activeVariant === 'bubble' && !hasValidImage
                    ? 'bg-[#BE185D] text-white border-[#BE185D]'
                    : 'bg-[#F9FAFB] text-[#4B5563] border-gray-200 hover:border-[#F472B6]'
                }`}
              >
                {activeVariant === 'bubble' && !hasValidImage && <Check className="w-3 h-3" />}
                <span>Bocadillo</span>
              </button>

              <button
                type="button"
                onClick={(e) => handleToggleVariant('pill', e)}
                className={`py-1 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 border transition-colors ${
                  activeVariant === 'pill' && !hasValidImage
                    ? 'bg-[#BE185D] text-white border-[#BE185D]'
                    : 'bg-[#F9FAFB] text-[#4B5563] border-gray-200 hover:border-[#F472B6]'
                }`}
              >
                {activeVariant === 'pill' && !hasValidImage && <Check className="w-3 h-3" />}
                <span>Píldora</span>
              </button>
            </div>
          </div>

          {hasValidImage && (
            <button
              type="button"
              onClick={handleResetToVector}
              className="text-[11px] text-[#9CA3AF] hover:text-[#BE185D] flex items-center justify-center gap-1 mt-1 pt-1 border-t border-gray-100"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Volver al vector oficial</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};
