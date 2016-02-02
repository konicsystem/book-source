package jpup.ajax.customer;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.naming.InitialContext;
import javax.sql.DataSource;

public class CustomerDAO {
	/**
	   * 필요한 전역 Field선언
	   * */
		Connection con;
		PreparedStatement ps;
		Statement st;
		ResultSet rs;
		DataSource ds;
		
	  /**
	   * DBCP준비하는 생성자 작성
	   * */
		public CustomerDAO(){
			try{
				InitialContext ct = new InitialContext();
				ds = (DataSource)ct.lookup("java:comp/env/jdbc/myoracle");
			}catch(Exception e){
				System.out.println(e+" => DBCP연결준비 실패!");
			}
		}
		
	  /**
	   * DB 해제 하는 메소드 작성
	   * */
		public void dbClose(){
			try{
				if(rs != null) rs.close();
				if(st != null) st.close();
				if(ps !=null) ps.close();
				if(con != null) con.close();
			}catch(Exception e){
				System.out.println(e+"=> dbClose실패" );
			}
			
		}
		
		
	 
	 
	 /**
	  * customer테이블 모든 레코드 검색하기
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
			 System.out.println(e+"=> customerSelect실패");
		 }finally{
			 this.dbClose();
		 }
		 return result;
		 
	 }
	 
	 /**
	  * custmer테이블에 레코드 추가하는 메소드
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
	 * id중복 체크 하기
	 * */
	public String customerIDCheck(String id) {
		String result="사용가능합니다.";
		 try{
			 con = ds.getConnection();
			 st = con.createStatement();
			 rs = st.executeQuery("SELECT * FROM customer where id='"+id.trim()+"'");
			
			 if(rs.next()){
				result="중복입니다.";
			 }
			
			 
		 }catch(Exception e){
			 System.out.println(e+"=> customerSelect실패");
		 }finally{
			 this.dbClose();
		 }
		 return result;
	}

	/**
	 * 번호에 해당하는 레코드 삭제하기
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















