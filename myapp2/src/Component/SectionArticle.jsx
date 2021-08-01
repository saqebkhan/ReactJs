import React from "react";
import "../Component/SectionArticle.css";


export const SectionArticle=({firstInfo , SecondInfo , ThirdInfo, FourthInfo}) =>{

return (
<div className="App">
<section>
<article>

<ul>HTML
<li>{firstInfo}</li>
<li>{SecondInfo}</li>
<li>{ThirdInfo}</li>
<li>{FourthInfo}</li>
</ul>
</article>

</section>
<section>
<article class="a">

<ol>CSS
<li>{firstInfo}</li>
<li>{SecondInfo}</li>
<li>{ThirdInfo}</li>
<li>{FourthInfo}</li>
</ol>
</article>

</section>


</div>
    );

}

export default SectionArticle
