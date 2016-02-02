package jpup.ajax.customer;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class CustomerDAO {
	/**
	   * �ʿ��� ���� Field����
	   * */
		Connection con;
		PreparedStatement ps;
		Statement st;
		ResultSet rs;
		DataSource ds;
		
	  /**
	   * DBCP�غ��ϴ� ������ �ۼ�
	   * */
		public CustomerDAO(){
			try{
				InitialContext ct = new InitialContext();
				ds = (DataSource)ct.lookup("java:comp/env/jdbc/myoracle");
			}catch(Exception e){
				System.out.println(e+" => DBCP�����غ� ����!");
			}
		}
		
	  /**
	   * DB ���� �ϴ� �޼ҵ� �ۼ�
	   * */
		public void dbClose(){
			try{
				if(rs != null) rs.close();
				if(st != null) st.close();
				if(ps !=null) ps.close();
				if(con != null) con.close();
			}catch(Exception e){
				System.out.println(e+"=> dbClose����" );
			}
			
		}
		
		
	 
	 
	 /**
	  * customer���̺� ��� ���ڵ� �˻��ϱ�
	  * 
	  */
	 public String customerSelect(){
		 String result="";
		 try{
			 con = ds.getConnection();
			 st = con.createStatement();
			 rs = st.executeQuery("SELECT * FROM customer order by no desc");
			 
			 result +="<customers>";
			 while(rs.next()){
				 result +="<customer>";
				 result +="<no>"+rs.getInt(1)+"</no>";
				 result +="<id>"+rs.getString(2)+"</id>";
				 result +="<name>"+rs.getString(3)+"</name>";
				 result +="<age>"+rs.getInt(4)+"</age>";
				 result +="<tel>"+rs.getString(5)+"</tel>";
				 result +="<addr>"+rs.getString(6)+"</addr>";	 
				 result +="</customer>";
			 }
			 result +="</customers>";
			 
		 }catch(Exception e){
			 System.out.println(e+"=> customerSelect����");
		 }finally{
			 this.dbClose();
		 }
		 return result;
		 
	 }
	 
	 /**
	  * custmer���̺� ���ڵ� �߰��ϴ� �޼ҵ�
	  */
	 public int customerInsert(CustomerVO bean){
		int result=0;
		String sql=
			"INSERT INTO customer " +
			"VALUES(CUSTOMER_SEQ.NEXTVAL,?,?,?,?,?)";
		try{
			con=ds.getConnection();
			ps = con.prepareStatement(sql);
			ps.setString(1, bean.getId());
			ps.setString(2, bean.getName());
			ps.setInt(3, bean.getAge());
			ps.setString(4, bean.getTel());
			ps.setString(5, bean.getAddr());
			
			result = ps.executeUpdate();
			
		}catch(Exception e){
			System.out.println(e+" => customerInsert fail");
		}finally{
			this.dbClose();
		}
		return result;
		 
	 }

	/**
	 * id�ߺ� üũ �ϱ�
	 * */
	public String customerIDCheck(String id) {
		String result="��밡���մϴ�.";
		 try{
			 con = ds.getConnection();
			 st = con.createStatement();
			 rs = st.executeQuery("SELECT * FROM customer where id='"+id.trim()+"'");
			
			 if(rs.next()){
				result="�ߺ��Դϴ�.";
			 }
			
			 
		 }catch(Exception e){
			 System.out.println(e+"=> customerSelect����");
		 }finally{
			 this.dbClose();
		 }
		 return result;
	}

	/**
	 * ��ȣ�� �ش��ϴ� ���ڵ� �����ϱ�
	 * */
	public int customerDelete(String no) {
		int result=0;
		String sql= "delete customer where no =?" ;
		try{
			con=ds.getConnection();
			ps = con.prepareStatement(sql);
			ps.setInt(1, Integer.parseInt(no));
			
			result = ps.executeUpdate();
			
		}catch(Exception e){
			System.out.println(e+" => customerDelete fail");
		}finally{
			this.dbClose();
		}
		return result;
	}
		
}//classEnd















