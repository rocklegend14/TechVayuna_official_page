export interface SocialLinks {
  instagram?: string;
  linkedin?: string;
  github?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  imageUrl: string;
  socials?: SocialLinks;
}
export interface TeamSection {
  id: string;
  title: string;
  members: TeamMember[];
}

export const executiveTeam: TeamSection = {
  id: 'executive',
  title: 'Executive Team',
  members: [
    {
      name: 'MUTHU VISHAL',
      title: 'President',
      imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/vishal.jpg',
      socials: {
        instagram: 'https://instagram.com/muthuvishal',
        linkedin: 'https://linkedin.com/in/muthuvishal',
        github: 'https://github.com/muthuvishal'
      }
    },
    {
      name: 'P ANISH',
      title: 'Vice President',
      imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/Anish.jpg',
      socials: {
        instagram: 'https://www.instagram.com/_an1sh.04_/profilecard/?igsh=MWhwanZ5czI1cms2cw==',
        linkedin: 'https://www.linkedin.com/in/p-anish-0469482ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        github: 'https://github.com/Barbatos101'
      }
    },
    {
      name: 'MANYA GUPTA',
      title: 'Vice President',
      imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/manya.jpg',
      socials: {
        instagram: 'https://www.instagram.com/__maaanyaa__/',
        linkedin: 'https://www.linkedin.com/in/manyagupta101/',
        github: ''
      }
    },
    {
      name: 'NIMALAN',
      title: 'Secretary',
      imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/nimalan.png',
      socials: {
        instagram: 'https://www.instagram.com/nimalan_raja23/profilecard/?igsh=MTNqMDJ5N2ppZThqMw==',
        linkedin: 'https://www.linkedin.com/in/nimalanrajar23',
        github: 'https://github.com/humblecoder18'
      }
    },
  ],
};

export const teamSections: TeamSection[] = [
  {
    id: 'core',
    title: 'CORE',
    members: [],
  },
  {
    id: 'leads',
    title: 'LEADS',
    members: [
      {
        name: 'PRANAV S A',
        title: 'WEB DEV',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/PranavSA.jpg',
        socials: {
          instagram: 'https://www.instagram.com/pranav_aravind18/profilecard/?igsh=MWg2dnR1dDIwbjd4dg==',
          linkedin: 'https://www.linkedin.com/in/pranav-s-a-3a90922aa',
          github: 'https://github.com/pranavsa1806'
        }
      },
      {
        name: 'JANAKI NAGESHWARAN',
        title: 'MACHINE LEARNING',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/janaki.jpg',
        socials: {
          instagram: 'https://www.instagram.com/janaki_nagesh/',
          linkedin: 'https://www.linkedin.com/in/janaki-nageshwaran-84498421a/',
          github: 'https://github.com/Janaki21'
        }
      },
      {
        name: 'MARK YUGAN',
        title: 'DESIGN',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/mark.jpeg',
        socials: {
          instagram: 'https://instagram.com/muthuvishal',
          linkedin: 'https://linkedin.com/in/muthuvishal',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'MAHESWARI M',
        title: 'DESIGN',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/maheswari.png',
        socials: {
          instagram: 'https://www.instagram.com/mahi.muralii/profilecard/?igsh=MTZxNTBmMnAxa2hoNw==',
          linkedin: 'https://www.linkedin.com/in/maheswari-m-51044428a/',
          github: 'https://github.com/maheswari10102004'
        }
      },
      {
        name: 'BHARATH CHANDRA',
        title: 'CONTENT',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/bharath.jpg',
        socials: {
          instagram: 'https://www.instagram.com/bharath_theblaze/profilecard/?igsh=MWc4ZXhvazZuYmI4NA==',
          linkedin: 'https://www.linkedin.com/in/bharath-chandra-tallapaka-a9a510246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'RAMANADAN',
        title: 'MEDIA',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/ram.png',
        socials: {
          instagram: 'https://instagram.com/muthuvishal',
          linkedin: 'https://linkedin.com/in/muthuvishal',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'PRAJEET',
        title: 'PROJECT MANAGEMENT',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/prajeet.jpg',
        socials: {
          instagram: 'https://instagram.com/muthuvishal',
          linkedin: 'https://linkedin.com/in/muthuvishal',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'L B UPPILI',
        title: 'PROJECT MANAGEMENT',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/uppili.jpg',
        socials: {
          instagram: 'https://www.instagram.com/antianxietio_2005/',
          linkedin: 'https://www.linkedin.com/in/lb-uppili-602024299/',
          github: 'https://github.com/antianxietio'
        }
      },
      {
        name: 'SOMESH SENTHIL',
        title: 'PR',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/somesh.jpg',
        socials: {
          instagram: 'https://www.instagram.com/someshdasavage/profilecard/?igsh=MTQyeGN3dmF4amx5Zg==',
          linkedin: 'https://www.linkedin.com/in/somesh-senthil-317a99221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/someshdasavage'
        }
      },
      {
        name: 'SHREENITHI V',
        title: 'PR',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/shreenithi.jpg',
        socials: {
          instagram: 'https://www.instagram.com/shreenithi_15/',
          linkedin: 'https://www.linkedin.com/in/shreenithi-v-85456228a/',
          github: ''
        }
      },
      {
        name: 'BENEDICT SUNIL',
        title: 'MARKETING',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/benedict.png',
        socials: {
          instagram: 'https://www.instagram.com/benedictsunill?igsh=MWdhajF1bGF2eGJ0dA==',
          linkedin: 'https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav',
          github: 'https://github.com/benedictsunil11'
        }
      },
      {
        name: 'RITHVIK G',
        title: 'MARKETING',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/rithvik.jpg',
        socials: {
          instagram: 'https://www.instagram.com/r_ithvik_/',
          linkedin: 'http://www.linkedin.com/in/grithvik',
          github: 'https://github.com/rithvik-hamilton'
        }
      },
    ],
  },
  {
    id: 'web-development',
    title: 'WEB DEV',
    members: [
      {
        name: 'SHREEYA PULLURU',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/shreeya.jpg',
        socials: {
          instagram: 'https://www.instagram.com/shreeya_2210/profilecard/?igsh=YmlveDJ0cGZzMmFp',
          linkedin: 'https://www.linkedin.com/in/shreeya-pulluru-23aba532a',
          github: 'https://github.com/shreeyapulluru'
        }
      },
      {
        name: 'NIMALAN',
        title: 'IoT',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/nimalan.png',
        socials: {
          instagram: 'https://www.instagram.com/nimalan_raja23/profilecard/?igsh=MTNqMDJ5N2ppZThqMw==',
          linkedin: 'https://www.linkedin.com/in/nimalanrajar23',
          github: 'https://github.com/humblecoder18'
        }
      },
      {
        name: 'MAHESWARI M',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/maheswari.png',
        socials: {
          instagram: 'https://www.instagram.com/mahi.muralii/profilecard/?igsh=MTZxNTBmMnAxa2hoNw==',
          linkedin: 'https://www.linkedin.com/in/maheswari-m-51044428a/',
          github: 'https://github.com/maheswari10102004'
        }
      },
      {
        name: 'PRAJEET',
        title: 'IoT',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/prajeet.jpg',
        socials: {
          instagram: 'https://instagram.com/muthuvishal',
          linkedin: 'https://linkedin.com/in/muthuvishal',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'HARINI',
        title: 'CSBS',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/harini.jpeg',
        socials: {
          instagram: 'https://www.instagram.com/_hariinii.__?igsh=MTl2c29rZDg1OTl3Ng==',
          linkedin: 'https://www.linkedin.com/in/harini-raja-a3b415297/',
          github: 'https://github.com/Hariinii21'
        }
      },
      {
        name: 'DIVAKAR R',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/divakar R.jpg',
        socials: {
          instagram: 'https://www.instagram.com/darkwizard_2k05/',
          linkedin: 'https://www.linkedin.com/in/divakar2005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/Divwizard-dev'
        }
      },
      {
        name: 'YASHWANTH',
        title: 'CSBS',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/Yashwanth.jpg',
        socials: {
          instagram: 'https://www.instagram.com/nah.its.yash_/profilecard/?igsh=MXB4enR6aW1od2Mxbg==',
          linkedin: 'https://www.linkedin.com/in/yashwanth-g-07727b25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/Yash1881'
        }
      },
      {
        name: 'YESHWANTHY S',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/yeshwanthy.jpeg',
        socials: {
          instagram: 'https://www.instagram.com/hugsandkisses.png/?show_story_unavailable=1',
          linkedin: 'https://www.linkedin.com/in/yeshwanthy-s-3454652a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/yeshiraK'
        }
      },
      {
        name: 'NIMAL SUNDAR',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/nimal.jpeg',
        socials: {
          instagram: 'https://www.instagram.com/nimal.sundar/profilecard/?igsh=eHc2ZjZybTN0dDUz',
          linkedin: 'https://www.linkedin.com/in/nimal-s-608634286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          github: 'https://github.com/NimalSundar'
        }
      },
      {
        name: 'PRANAV M',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/PranavM.jpg',
        socials: {
          instagram: 'https://www.instagram.com/pranav_297789/profilecard/?igsh=c3p3YWliYjh1eDRs',
          linkedin: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQG5Id_0tuR7fwAAAZP42T3YIhQB_C_wQQS5tOkcKbCZUS2Zt6q_tI4iPv4vBQq4MhCft_tHstKkWhKXMWam2rtx2T0pbNIbQwXs9Pb2rboZf3dA0c3tQXYxC1ZdAcdvb2F0M0o=&original_referer=https://l.instagram.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpranav-m-7808872a9%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DPAZXh0bgNhZW0CMTEAAabnzaZn4BIF4m6h6wvWZc-Vm_XoHpvFw02QTAwxwXLQD_D7Yh4oW-Hfbzc_aem_b4pzXZmeKErvAovKKvGX8Q',
          github: 'https://github.com/pranav7676?fbclid=PAZXh0bgNhZW0CMTEAAaYSdopmuYOn_w8dvwu177YMHjYvOd_TbF4Ss8HyFBiZcbywqgp0DES-QGU_aem_6ba0ilcv2U6c626KMge9RQ'
        }
      },
    ],
  },
  {
    id: 'data-analytics',
    title: 'DATA ANALYTICS',
    members: [],
  },
  {
    id: 'machine-learning',
    title: 'AI',
    members: [
      {
        name: 'SHREENITHI V',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/shreenithi.jpg',
        socials: {
          instagram: 'https://www.instagram.com/shreenithi_15/',
          linkedin: 'https://www.linkedin.com/in/shreenithi-v-85456228a/',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'GIRISELVAN',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/giriselvan.jpg',
        socials: {
          instagram: 'https://www.instagram.com/sgirishelvan/',
          linkedin: 'https://www.linkedin.com/in/giriselvan-s/',
          github: 'https://github.com/giriselvansridhar'
        }
      },
      {
        name: 'SANJANA R',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/sanjana.jpeg',
        socials: {
          instagram: '',
          linkedin: 'http://linkedin.com/in/sanjana-ramesh-babu-3b57b9312',
          github: 'https://github.com/Sanjana-Ramesh-Babu'
        }
      },
      {
        name: 'MUKESH',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/mukesh.jpg',
        socials: {
          instagram: 'https://www.instagram.com/_mukesh_.1103/profilecard/?igsh=NXpvNTNnMjJjOHV3',
          linkedin: 'http://www.linkedin.com/in/mukesh-p-4a3873297',
          github: 'https://github.com/Mukesh631102'
        }
      },
    ],
  },
  {
    id: 'design',
    title: 'DESIGN',
    members: [
      {
        name: 'PRAJEET',
        title: 'IoT',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/prajeet.jpg',
        socials: {
          instagram: 'https://instagram.com/muthuvishal',
          linkedin: 'https://linkedin.com/in/muthuvishal',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'VIDIP KUMAR',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/vidip.jpeg',
        socials: {
          instagram: 'https://www.instagram.com/vidipkumar_/',
          linkedin: 'https://www.linkedin.com/in/vidipkumar-ss-945151293/',
          github: 'https://github.com/VIDIPKUMAR'
        }
      },
      {
        name: 'PRANAV M',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/PranavM.jpg',
        socials: {
          instagram: 'https://www.instagram.com/pranav_297789/profilecard/?igsh=c3p3YWliYjh1eDRs',
          linkedin: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQG5Id_0tuR7fwAAAZP42T3YIhQB_C_wQQS5tOkcKbCZUS2Zt6q_tI4iPv4vBQq4MhCft_tHstKkWhKXMWam2rtx2T0pbNIbQwXs9Pb2rboZf3dA0c3tQXYxC1ZdAcdvb2F0M0o=&original_referer=https://l.instagram.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpranav-m-7808872a9%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DPAZXh0bgNhZW0CMTEAAabnzaZn4BIF4m6h6wvWZc-Vm_XoHpvFw02QTAwxwXLQD_D7Yh4oW-Hfbzc_aem_b4pzXZmeKErvAovKKvGX8Q',
          github: 'https://github.com/pranav7676?fbclid=PAZXh0bgNhZW0CMTEAAaYSdopmuYOn_w8dvwu177YMHjYvOd_TbF4Ss8HyFBiZcbywqgp0DES-QGU_aem_6ba0ilcv2U6c626KMge9RQ'
        }
      },
      
      {
        name: 'DARSHAN R',
        title: 'UX Designer',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/darshan.jpeg',
        socials: {
          instagram: '',
          linkedin: '',
          github: ''
        }
      },
    ],
  },
  {
    id: 'content',
    title: 'CONTENT',
    members: [
      {
        name: 'RAKSHANA BHASKAR',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/rakshana.jpg',
        socials: {
          instagram: 'https://www.instagram.com/rakshana.1305',
          linkedin: 'http://www.linkedin.com/in/rakshana-baskar-0a6a9b2a4',
          github: 'https://github.com/Rakshu1305'
        }
      },
      {
        name: 'KRITHIKA',
        title: ' ',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/krithika.png',
        socials: {
          instagram: 'https://www.instagram.com/__crxzy._.grl__/profilecard/?igsh=ZDgxZHB4OGdxZGRy',
          linkedin: 'https://www.linkedin.com/in/kiruthiga-k-92b3702b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
          github: 'https://github.com/crxzy-grl'
        }
      },
    ],
  },
  {
    id: 'video-editing',
    title: 'MEDIA',
    members: [
      {
        name: 'S SWETHA',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/swetha.jpg',
        socials: {
          instagram: '',
          linkedin: '',
          github: ''
        }
      },
      {
        name: 'VIGNESHWARAR T',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/vigneshwrar.jpeg',
        socials: {
          instagram: '',
          linkedin: '',
          github: ''
        }
      },
      {
        name: 'DARSHAN RAMMOHAN',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/darshan.jpeg',
        socials: {
          instagram: '',
          linkedin: '',
          github: ''
        }
      },
      {
        name: 'CHENNAREDDY SRAVANTHI',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/chennareddy.jpg',
        socials: {
          instagram: '',
          linkedin: '',
          github: ''
        }
      },
      {
        name: 'VIDIP KUMAR',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/vidip.jpeg',
        socials: {
          instagram: 'https://www.instagram.com/vidipkumar_/',
          linkedin: 'https://www.linkedin.com/in/vidipkumar-ss-945151293/',
          github: 'https://github.com/VIDIPKUMAR'
        }
      },
      {
        name: 'CHARUMATHI SRI P',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/charu.jpg',
        socials: {
          instagram: 'https://instagram.com/muthuvishal',
          linkedin: 'https://linkedin.com/in/muthuvishal',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'PRANAV M',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/PranavM.jpg',
        socials: {
          instagram: 'https://www.instagram.com/pranav_297789/profilecard/?igsh=c3p3YWliYjh1eDRs',
          linkedin: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQG5Id_0tuR7fwAAAZP42T3YIhQB_C_wQQS5tOkcKbCZUS2Zt6q_tI4iPv4vBQq4MhCft_tHstKkWhKXMWam2rtx2T0pbNIbQwXs9Pb2rboZf3dA0c3tQXYxC1ZdAcdvb2F0M0o=&original_referer=https://l.instagram.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpranav-m-7808872a9%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DPAZXh0bgNhZW0CMTEAAabnzaZn4BIF4m6h6wvWZc-Vm_XoHpvFw02QTAwxwXLQD_D7Yh4oW-Hfbzc_aem_b4pzXZmeKErvAovKKvGX8Q',
          github: 'https://github.com/pranav7676?fbclid=PAZXh0bgNhZW0CMTEAAaYSdopmuYOn_w8dvwu177YMHjYvOd_TbF4Ss8HyFBiZcbywqgp0DES-QGU_aem_6ba0ilcv2U6c626KMge9RQ'
        }
      },
    ],
  },
  {
    id: 'public-relations',
    title: 'PR & MARKETING',
    members: [
      {
        name: 'VAISHALI A',
        title: 'CSE',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/vaishali.jpeg',
        socials: {
          instagram: 'https://instagram.com/muthuvishal',
          linkedin: 'https://linkedin.com/in/muthuvishal',
          github: 'https://github.com/muthuvishal'
        }
      },
      {
        name: 'NARENDRA KUMAR',
        title: 'AIML',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/narendra.jpg',
        socials: {
          instagram: 'https://instagram.com/muthuvishal',
          linkedin: 'https://linkedin.com/in/muthuvishal',
          github: 'https://github.com/muthuvishal'
        }
      },
    ],
  },
  {
    id: 'marketing',
    title: 'CP',
    members: [
      {
        name: 'NARENDRA KUMAR',
        title: 'AIML',
        imageUrl: 'https://cdn.jsdelivr.net/gh/antianxietio/cdn.techvayuna@main/narendra.jpg',
        socials: {
          instagram: 'https://www.instagram.com/joe_kraper_/profilecard/?igsh=MW45YmFsN21uZTg5Nw==',
          linkedin: 'https://www.linkedin.com/in/narendrakumar-suresh-b0a2b4210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          github: 'https://github.com/Narendrakumar-Suresh'
        }
      },
    ],
  },
];