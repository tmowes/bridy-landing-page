import { ImageResponse } from 'next/og';
import { LogoOGI } from '@/components/logo-ogi';

export const runtime = 'edge';
export const alt = 'BRIDY - Quebrando muros, construindo pontes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const interRegular = fetch(new URL('@/components/fonts/static/Inter_18pt-Regular.ttf', import.meta.url)).then((res) => res.arrayBuffer());
  const interBold = fetch(new URL('@/components/fonts/static/Inter_18pt-Bold.ttf', import.meta.url)).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
          color: '#000000',
          padding: '40px',
        }}
      >
        <div style={{ marginBottom: '20px' }}>
          <LogoOGI className="h-5 w-auto" />
        </div>

        <h1
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            margin: '0',
            textAlign: 'center',
            fontFamily: 'Inter Bold',
          }}
        >
          BRIDY
        </h1>

        {/* Slogan */}
        <p
          style={{
            fontSize: '40px',
            fontWeight: 'normal',
            marginTop: '10px',
            textAlign: 'center',
            maxWidth: '800px',
            fontFamily: 'Inter',
          }}
        >
          Quebrando muros, construindo pontes. Participe da pesquisa!
        </p>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interRegular,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'Inter Bold',
          data: await interBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}