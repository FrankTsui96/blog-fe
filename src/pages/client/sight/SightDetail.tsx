import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function SightDetail() {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">弗兰克的视线详情：{id}</h1>
      <div className="mt-8">{/* 内容待添加 */}</div>
    </div>
  );
}
