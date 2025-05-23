import createClient from "openapi-fetch";
import type { paths } from "./mintgarden";

// https://api.mintgarden.io/docs
// Example NFT: https://mintgarden.io/nfts/noble-marmot---house-edelweiss-nft15ajne3y0r83gep7k2vv44ddfs3ge7uy3rukr3x0jcnvdzvfce24sr6x4c6
const launcherId = "nft15ajne3y0r83gep7k2vv44ddfs3ge7uy3rukr3x0jcnvdzvfce24sr6x4c6";


async function main() {
    const client = createClient<paths>({ baseUrl: "https://api.mintgarden.io/" });

    const {
    data, // only present if 2XX response
    error, // only present if 4XX or 5XX response
    } = await client.GET("/nfts/{launcher_bech32}", {
        params: {
        path: { launcher_bech32: launcherId },

        }
    });

    console.log([data, error]);
}

main();