import React from 'react';
import './Header.css'
import SearchIcon  from '@mui/icons-material/Search';
import shoppingBasketIcon  from '@mui/icons-material/AddShoppingCart';

function Header() {
  return (
    <div className='header'>
        <img 
         className="header_logo"
         src="https://www.google.com/search?q=ecommerce+logo+png&rlz=1C1BNSD_enBD969BD969&sxsrf=ALiCzsbThm5leWjwbzLsS7A3l7b1PkK9tA:1652895217709&tbm=isch&source=iu&ictx=1&vet=1&fir=JVAkpSXnCmkveM%252CMhtIC0OZH2In6M%252C_%253BsUls9WwUmUQp7M%252CcpyZ3dl2_xnMLM%252C_%253Bev7kegvpiqsexM%252C0KzIbZ31KpauoM%252C_%253BzN6Ktf7068RSWM%252Cg6mMaA4Ns62zYM%252C_%253BRe1teT_OidGfiM%252CQYPi4FLaoCVQnM%252C_%253BzTcCULNju9PG1M%252CwjZk7A8OX5z3SM%252C_%253BdXdZHFD2jjjzpM%252CJnIMjCjPYAdjNM%252C_%253Bdl8zn3rkgi68CM%252CgxrjNyps-7-w_M%252C_%253B-iEYUPLsa1d6yM%252CRe9YtcRhPPTkzM%252C_%253BmFB0r176MaSCoM%252CStcSopg9s4NyyM%252C_%253BcRvDRJxZ5eTK4M%252CglkNm6fFSuhj7M%252C_%253BW3yLAfD21Xn08M%252CEd5NmSUIsUvJBM%252C_%253BTkPkTBrSfuHPPM%252Cec06uqkTP03UKM%252C_&usg=AI4_-kTHn8vavx4RSEUZUXxIc3QlFUUdSg&sa=X&ved=2ahUKEwiQsbXCyun3AhWySWwGHUfnAnkQ9QF6BAgOEAE&biw=1366&bih=657&dpr=1#imgrc=ev7kegvpiqsexM"/>

         <div
         className="header_search">
             <input
             className="header_searchInput" type="text" />
             <searchIcon
             className="header_searchIcon"/>
             
         </div>
         <div className="header_nav">
             <div className='header_option'>
                 <span
                 className='header_optionLineOne'>Hello Guest</span>
                 <span
                 className='header_optionLineTwo'>Sign In</span>

             </div>
             <div className='header_option'>
             <span
                 className='header_optionLineOne'>Return</span>
                 <span
                 className='header_optionLineTwo'>& Orders</span>
             

             </div>
             <div className='header_option'>
             <span
                 className='header_optionLineOne'>Your</span>
                 <span
                 className='header_optionLineTwo'>Prime</span>
             

             </div>
             <div className="header_optionBasket">
                 <shoppingBasketIcon/>
                 <span className="header_optionLineTwo header_basketCount">0</span>
             </div>
         </div>
    </div>
  );
}

export default Header