'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function HanziDetail() {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">说字详情：{id}</h1>
      <div className="mt-8">{/* 内容待添加 */}</div>
    </div>
  );
}
