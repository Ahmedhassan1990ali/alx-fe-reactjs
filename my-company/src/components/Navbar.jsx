import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '1rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '2rem',
        margin: 0,
        padding: 0,
        justifyContent: 'center'
      }}>
        <li><Link to="/" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          transition: 'background 0.3s'
        }} onMouseOver={(e) => e.target.style.background = '#34495e'}
           onMouseOut={(e) => e.target.style.background = 'transparent'}>Home</Link></li>
        <li><Link to="/services" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          transition: 'background 0.3s'
        }} onMouseOver={(e) => e.target.style.background = '#34495e'}
           onMouseOut={(e) => e.target.style.background = 'transparent'}>Services</Link></li>
        <li><Link to="/about" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          transition: 'background 0.3s'
        }} onMouseOver={(e) => e.target.style.background = '#34495e'}
           onMouseOut={(e) => e.target.style.background = 'transparent'}>About</Link></li>
        <li><Link to="/contact" style={{
          color: 'white',
          textDecoration: 'none',
          fontWeight: '500',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          transition: 'background 0.3s'
        }} onMouseOver={(e) => e.target.style.background = '#34495e'}
           onMouseOut={(e) => e.target.style.background = 'transparent'}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;