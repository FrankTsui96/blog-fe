import "./page.scss";
import Image from "next/image";

const CDNBaseUrl = "https://cdn.franktsui.com/articles";

const ImgUrls = [
  `${CDNBaseUrl}/1776229867877-西歷2021年10月6日於浮山（其一）.png`,
  `${CDNBaseUrl}/1776161040201-西歷2021年10月6日於浮山（其二）.png`,
  `${CDNBaseUrl}/1776161058786-西歷2021年10月6日於浮山（其三）.png`,
  `${CDNBaseUrl}/1776167480249-西歷2021年10月6日於浮山（其四）.png`,
  `${CDNBaseUrl}/1776231759451-西歷2021年10月29日於黃島文化路小學斜對面公共洗手間外.png`,
];

export default function Hanzi() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold">说字</h1>
      <div className="mt-8">
        <div className="grid-container">
          {ImgUrls.map((img, i) => (
            <div className="grid-item" key={i}>
              <Image src={img} width={800} height={800} alt="image" className='w-full' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
