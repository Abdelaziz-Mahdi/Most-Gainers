export default function Footer() {
  return (
    <footer className="container p-3 mt-auto rounded mb-2 text-white">
      &copy;
      <strong> Adelaziz Mahdi</strong>
      &nbsp;
      {new Date().getFullYear()}
    </footer>
  );
}
