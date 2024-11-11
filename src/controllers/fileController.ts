import { Context } from "elysia";
import parseCSV from "../utils/csvParser";
import checkDomainStatus from "../utils/checkDomainStatus";
import { Domain } from "../utils/Domain";

export const handleFileUpload = async (ctx: Context): Promise<Object[]> => {
    const domains: object[] = new Array();
    try {
        const fileBuffer = (await ctx.body) as Buffer;

        const fileContent = Buffer.from(fileBuffer).toString("utf8");

        const data: string[] = parseCSV(fileContent);

        if (data.length !== 0) {
            for (let i = 0; i < data.length; i++) {
                const result: Domain = await checkDomainStatus(data[i]);
        let object: Object = {
          Domain: result.getDomain(),
          Status: result.getStatus(),
          Cart: result.getCart(),
          Advertisement: result.getAdvertisement(),
        };
        domains.push(object);
      }

            console.log(domains);
        }

        return domains;
    } catch (error) {
        console.error("Błąd przetwarzania pliku:", error);
        return domains;
    }
};
