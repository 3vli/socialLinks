import { supabase } from './utils/supabase';
import { setSysTheme } from './theme';
import { supabaseseo } from './seo';
async function supabasecode() {
    const { data: userData, error: userErr } = await supabase
        .from('youSuf')
        .select('name, instagram, github , img')
        .single(); 
    const { data: brandData, error: brandErr } = await supabase.from('brandimgs').select('instagramimg, githubimg, linkedinimg').single();
    if (userErr) {
        console.error('Error fetching GitHub link:', userErr);
        return;
    }
    if (brandErr) {
        console.error('Error fetching GitHub link:', brandErr);
        return;
    }


    const img = document.querySelector<HTMLImageElement>('#img');
    const user = document.querySelector<HTMLImageElement>('#name');
    if (user&&img&&userData && userData.instagram && userData.name) {
            img.src = userData.img;
        user.textContent = userData.name.toUpperCase();
    }

    const instaicon=  document.querySelector<HTMLImageElement>('#instaicons');
    const githubicon = document.querySelector<HTMLImageElement>('#githubicons');
    if (githubicon &&instaicon&&brandData && brandData.instagramimg && brandData.githubimg) {
        instaicon.src = brandData.instagramimg;
        githubicon.src = brandData.githubimg;
    }
}

setSysTheme();
supabasecode();
supabaseseo();