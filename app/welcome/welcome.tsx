import { Link } from "react-router";

export function Welcome() {
  return (
    <div className="flex items-center justify-center pt-16 pb-4">
      <ul>
        <li>
          <Link to="/oss">Oss</Link>
        </li>
      </ul>
    </div>
  )
}
