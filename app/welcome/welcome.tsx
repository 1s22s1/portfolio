import { Link } from "react-router";

export function Welcome() {
  return (
    <div className="flex items-center justify-center pt-16 pb-4">
      <ul>
        <li><Link to="/self_introduction">自己紹介</Link></li>
        <li><Link to="/qualification">保有資格</Link></li>
        <li><Link to="/oss">OSS</Link></li>
        <li><Link to="/lucky_uuid">ラッキーUUID</Link></li>
      </ul>
    </div>
  )
}
