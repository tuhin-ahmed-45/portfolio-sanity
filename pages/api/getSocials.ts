import { sanityClient } from "@/sanity";
import { groq } from "next-sanity";
const query = groq`
    *[_type == "social]
`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(query);
  res.status(200).json({ socials });
}
