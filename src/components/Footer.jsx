export default function Footer(){
  return(
    <div>
      <footer className="bg-secondary text-center text-lg-start">
      <div className="text-center p-3 text-white">
        © {new Date().getFullYear()} Your Compony Food
      </div>
    </footer>
    </div>
  )
}