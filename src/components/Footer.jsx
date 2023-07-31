export default function Footer() {
  return (
    <footer className="container bg-success-subtle p-3 mt-auto rounded mb-2">
      &copy;
      <strong> Adelaziz Mahdi</strong>
      &nbsp;
      {new Date().getFullYear()}
    </footer>
  );
}
