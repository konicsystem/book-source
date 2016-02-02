package jpup.ajax.customer;

public class CustomerVO {
	private int no;
	private String id;
    private String name;
    private int age;
    private String  tel;
    private String addr;
    
    public void setId(String id) {
		this.id = id;
	}
    
    public String getId() {
		return id;
	}
    
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
}
