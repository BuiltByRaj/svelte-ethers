// @ts-ignore
import { providers } from 'ethers'
import { writable } from 'svelte/store';
export const darkTheme = writable(true);
export const connectedWalletAddress = writable("-1");
export const provider = writable({})
export const signer = writable({});
export const connectionError = writable(false);

