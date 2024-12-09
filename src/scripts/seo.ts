import { supabase } from './utils/supabase';


export async  function supabaseseo() {
   const { data, error } = await supabase.from('youSuf').select('name,instagram,github,img ').single();
   if (error) {
      console.log(`Error: ${error}`);
   }
   
   
   const title = document.getElementById('title');
   if (title && data) {
      title.textContent = `${data.name}`;
   }
   const logo = document.querySelector<HTMLLinkElement>('#logo');
   if (logo && data) {
      logo.href = data.img;
      
   }
   const meta1 = document.querySelector<HTMLMetaElement>('#metaimg');
   if (meta1 && data) {
      meta1.content = data.img;
   }
   console.log(`Error: ${error}`);
   console.log(document.getElementById('title'));
};
