function Footer(props) {
    return (<div className="text-footer">
      <span>    
        {props.copy} {props.name} {props.tahun}    
      </span>
      </div>
    );
  }

export default Footer;