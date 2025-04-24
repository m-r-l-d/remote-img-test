import { NextResponse } from "next/server";

const s3 = new S3Client({
  
});

export async function GET() {
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: "tools.png",
    });

    const url = await getSignedUrl(s3, command);

    return new NextResponse(url);
  } catch (error) {
    console.error("Error fetching image from S3:", error);
    return new Response("Error fetching image from S3");
  }
}
