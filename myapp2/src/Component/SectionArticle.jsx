import React from "react";
import "../Component/SectionArticle.css";


export const SectionArticle=({firstInfo , SecondInfo , ThirdInfo, FourthInfo}) =>{

return (
<div className="App">
<section>
<article>

<ul>HTML</ul>
<li>{firstInfo}</li>
<li>{SecondInfo}</li>
<li>{ThirdInfo}</li>
<li>{FourthInfo}</li>
</article>

</section>
<section>
<article class="a">

<ol>CSS</ol>
<li>{firstInfo}</li>
<li>{SecondInfo}</li>
<li>{ThirdInfo}</li>
<li>{FourthInfo}</li>
</article>

</section>


</div>
    );

}
