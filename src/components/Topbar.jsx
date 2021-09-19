import React from 'react';
import SocialMediaBar from 'react-social-media-bar';

const MINIMAL_ICONS = [
    {
      media: 'instagram',
      link: 'https://instagram.com/rahrang'
    },
    {
      media: 'github',
      link: 'https://github.com/rahrang'
    },
    {
      media: 'linkedin',
      link: 'https://linkedin.com/in/rahrang'
    }
  ];

const Topbar = (props) => {

    return (
        <div className="container-fluid bg-primary">
            <div className="container p-2 text-right">
                <SocialMediaBar
                    icons={[MINIMAL_ICONS]}
                    bgColor="rgba(0, 0, 0, 0)"
                    iconColor="#000"
                    iconOpacity={1}
                    iconSize="1em"
                    hoverColor="#000"
                    hoverOpacity={1}
                    margin={{ top: '5px', right: '5px', bottom: '5px', left: '5px' }}
                    padding={{ top: '0px', right: '0px', bottom: '0px', left: '0px' }}
                    sameTab={false}
                    vertical={false}
                />
            </div>
        </div>
    );
}



export default Topbar;