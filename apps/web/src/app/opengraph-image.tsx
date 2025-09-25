import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BRIDY - Quebrando muros, construindo pontes';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
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
        <img src="@/components/images/logo.png" width={200} height={200} style={{ marginBottom: '20px' }} />
        <h1
          style={{
            fontSize: '80px',
            fontWeight: 'bold',
            margin: '0',
            textAlign: 'center',
          }}
        >
          BRIDY
        </h1>
        <p
          style={{
            fontSize: '40px',
            fontWeight: 'normal',
            marginTop: '10px',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Quebrando muros, construindo pontes. Participe da pesquisa!
        </p>
      </div>
    ),
    { ...size }
  );
}