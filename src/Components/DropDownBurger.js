function burgermenu() {
  return (
    <div>
      <Dropdown
        className="d-inline-block"
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        isOpen={this.state.dropdownOpen1}
        toggle={this.toggle1}
      >
        <DropdownToggle caret>Dropdown1</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Submenu 1</DropdownItem>
          <DropdownItem>Submenu 1.1</DropdownItem>
        </DropdownMenu>
        &nbsp;&nbsp;&nbsp;
      </Dropdown>
      <Dropdown
        className="d-inline-block"
        // onMouseOver={this.onMouseEnter}
        // onMouseLeave={this.onMouseLeave}
        isOpen={this.state.dropdownOpen2}
        toggle={this.toggle2}
      >
        <DropdownToggle caret>Dropdown2</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Submenu 2</DropdownItem>
          <DropdownItem>Submenu 2.1</DropdownItem>
          <DropdownItem>Submenu 2.2</DropdownItem>
        </DropdownMenu>
        &nbsp;&nbsp;&nbsp;
        <br />
        <br />
      </Dropdown>
      <Dropdown
        className="d-inline-block"
        // onMouseOver={this.onMouseEnter}
        // onMouseLeave={this.onMouseLeave}
        isOpen={this.state.dropdownOpen3}
        toggle={this.toggle3}
      >
        <DropdownToggle caret>Dropdown3</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Submenu 3</DropdownItem>
          <DropdownItem>Submenu 3.1</DropdownItem>
          <DropdownItem>Submenu 3.2</DropdownItem>
          <DropdownItem>Submenu 3.3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropDownBurger;
