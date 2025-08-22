import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // بدل الجزء ده بأي قاعدة بيانات أو حتى Fake data
  const product = {
    id,
    name: `Product ${id}`,
    price: 99.99,
    description: 'Sample product from API',
  };

  return NextResponse.json(product);
}
