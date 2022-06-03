//library
import {Link} from "react-router-dom";
import {Select} from "antd";
import cn from 'classnames'

//components
import {HeaderNav} from "./libs/HeaderNav";
import {IconSelector} from "../../IconSelector";


export const Header = ({isMainPage = false, isShow, toggleNavMenu}) => {
  const { Option } = Select;

  const handleChange = (value) => {
    localStorage.setItem('location',value);
  };

  const hamburgerLine = 'h-1 w-8 my-1 rounded-full bg-white'

  return (
      <header className={ cn('bg-primary row-end-1 z-30 top-0 px-[90px] py-3 w-screen',
          {
            'bg-transparent': isMainPage
          })}>
        <div className='flex justify-between text-white items-center'>
          <div className='flex items-center'>
            <button onClick={toggleNavMenu} className="flex flex-col h-12 w-12 mr-10 rounded justify-center items-center">
              <div className={hamburgerLine}></div>
              <div className={hamburgerLine}></div>
              <div className={hamburgerLine}></div>
            </button>
            <Link to='/'>
              <h1 className='title text-white'>EASILY</h1>
            </Link>

            <div className="ml-[30px] flex">
              <IconSelector
                  id="location"
                  fill="white"
              />
              <Select
                  defaultValue="almaty"
                  style={
                    {
                      fontSize:20,
                      color:'#fff',
                      width: 150
                    }
                  }
                  onChange={handleChange}
                  bordered={false}
              >
                <Option value="almaty">Almaty</Option>
                <Option value="astana">Astana</Option>
                <Option value="karaganda">Karaganda</Option>
                <Option value="shymkent">Shymkent</Option>
              </Select>
            </div>
      </div>
      <HeaderNav/>
    </div>
  </header>)
}
