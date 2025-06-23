import { getDefaultConfig, WalletList } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import {
  base,
  baseSepolia,
  bsc,
  bscTestnet,
  hoodi,
  mainnet,
  sepolia,
} from "wagmi/chains";
import {
  metaMaskWallet,
  okxWallet,
  walletConnectWallet,
  phantomWallet,
  binanceWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";

const wallets: WalletList = [
  {
    groupName: "Wallets",
    wallets: [
      metaMaskWallet,
      phantomWallet,
      walletConnectWallet,
      okxWallet,
      binanceWallet,
      trustWallet,
    ],
  },
];
const chains = [
  mainnet,
  sepolia,
  hoodi,
  base,
  baseSepolia,
  bsc,
  bscTestnet,
] as const;

const metadata = {
  name: "Nextjs Wagmi Quickstart",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
};
const config = getDefaultConfig({
  appName: metadata.name,
  projectId: metadata.projectId,
  chains,
  transports: {
    [chains[0].id]: http(),
    [chains[1].id]: http(),
    [chains[2].id]: http(),
    [chains[3].id]: http(),
    [chains[4].id]: http(),
    [chains[5].id]: http(),
    [chains[6].id]: http(),
  },
  ssr: true,
  wallets,
});

export const wagmiConfig = config;

export const defaultNetwork = chains[1];
