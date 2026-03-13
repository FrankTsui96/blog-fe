import { articlesApi } from '@/api/articles';
import { ArticleType } from '@/constants';
import type { ArticleRecord } from '@/api/articles';
import { useArticles } from '@/hooks/useArticles';

import { toast } from 'sonner';
import type { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/common/DataTable';

const columns: ColumnDef<ArticleRecord>[] = [
  {
    accessorKey: 'title',
    header: '文章标题',
  },
  {
    accessorKey: 'subtitle',
    header: '文章副标题',
  },
  {
    accessorKey: 'type',
    header: '文章类型',
  },
];

export default function Articles() {
  const { data: articles } = useArticles({ page: 1, pageSize: 10 });

  const handleCreateArticle = async () => {
    try {
      const res = await articlesApi.createArticle({
        characters: ['乐'],
        type: ArticleType.SHUOZI,
        title: '测试文章222',
        content: '测试多音字',
      });
      if (res.code === 200) {
        toast.success('创建文章成功');
      }
    } catch (error: any) {
      console.error(error.data.message);
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div>
        <Button onClick={handleCreateArticle}>创建文章</Button>
      </div>
      <DataTable columns={columns} data={articles?.data.records || []} />
    </div>
  );
}
