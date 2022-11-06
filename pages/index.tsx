import { ConnectButton } from '@rainbow-me/rainbowkit'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import { useAccount } from 'wagmi';
import useIsMounted from '../hooks/useIsMounted';

const DynamicModel = dynamic(() => import('../components/modelviewer'), {
  ssr: false,
});

export default function Home() {
  const { address } = useAccount();
  const isMounted = useIsMounted();

  return (
    <>
      <Head>
        <title>BiggieBank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className="text-3xl font-bold">
          BiggieBank
        </h1>
        <main>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              {isMounted && (
                address ? (
                  <>
                    <p>Feed the piggy and watch him grow!</p>
                    <DynamicModel />
                  </>
                ) : (
                  <>
                    <h2 className="card-title">Connect your Web3 Wallet</h2>
                  </>
                )
              )}
              <div className="card-actions justify-end">
                <ConnectButton />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
