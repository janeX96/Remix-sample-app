import { Link } from "@remix-run/react";

export default function AdminIndex() {
  return (
    <p>
      <Link to="new" className="header link">
        Create a New Post
      </Link>
    </p>
  );
}
