import './App.css'
import img1 from './Images/InShot_20210319_003552870.jpg'
function Portfolio(){
    function clicked(){
        document.getElementsByClassName("Navbar")
    }

    return(
        <div className='Portfolio'>
            <nav className='Navbar'>
                <span className='navdiv1'>
                    <h1>Portfolio.</h1>
                    <div>Shraddha Koli</div>
                    <nav>Home</nav>
                   
                    {/* <a href="">Home</a> */}
                    <div>About</div>
                    <div>Skills</div>
                    <div>Services</div>
                    <div>Contact</div>
                    <a href=""><i class="fa-regular fa-envelope"></i></a>
                    <a href=""><i class="fa-brands fa-linkedin"></i></a>
                    <a href=""><i class="fa-brands fa-square-facebook"></i></a>
                </span>
            </nav>

            <section className='card'>
                <img src={img1} alt=""  />
                {/* <h1>I have completed BE degree from VTU university with career interests in web devlopment.</h1> */}
               <div>
              <h5>Hello,</h5> 
                <br></br>
                <h1>I'm Shraddha Koli</h1>
                 <h2>Web developer</h2>
                 <h5>From belgaum,karntaka</h5>
                 <h5>Email-kshraddha738@gmail.com</h5>
                 <h5>Phone:7996684430</h5>
                 <button>Hire Me</button>

                
                </div> 
                

            </section>
            <br />
            <br />

           


            <article className='art'>
                <div className='sp1'>
                <hr />
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis fugit totam dolores! Officiis voluptates nam ipsum nemo nostrum! Doloribus molestias provident doloremque enim, distinctio impedit modi ab ipsa nisi minus, aspernatur, eligendi nesciunt voluptas? Impedit, in? Soluta assumenda provident porro excepturi perferendis. Eius, quo, dolorum corrupti maxime quod quibusdam impedit minus nisi suscipit odit, eum laborum fugiat veritatis dolor minima voluptatem rem. Laboriosam voluptas dolorum, odio ipsa provident earum iure quia nemo quibusdam voluptates veritatis inventore nobis praesentium necessitatibus aliquid voluptatibus est alias quam. Porro dignissimos ex explicabo blanditiis. Labore a excepturi recusandae quas quos laudantium aliquam pariatur cupiditate. </p>
                </div>
            </article>


            <article className='art1'>
                <div className='sp2'>
                    <h2>Skills</h2>
                    {/* <hr /> */}
                {/* <h2>Skills</h2> */}
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACTJS</li>
                    <li>SQL</li>
                    <li>JAVA</li>
                </ul>
                </div>
            </article>

           

            






            

        </div>
    )
}
export default Portfolio