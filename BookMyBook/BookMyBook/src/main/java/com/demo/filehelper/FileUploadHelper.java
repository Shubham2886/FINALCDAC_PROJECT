package com.demo.filehelper;

import java.io.File;
import java.io.FileOutputStream;

import java.io.InputStream;


import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class FileUploadHelper {
	
	//public final String UPLOAD_DIR=new ClassPathResource("static/image/").getFile().getAbsolutePath();
	public final String UPLOAD_DIR="D:\\PROJECT\\New folder\\BookMyBook\\cdacproject_30_09\\cdacproject_30_09\\public\\images"; //path of images folder in frontend

	
//	//we need constructor for classpath resource to handle exception
//	public FileUploadHelper() throws IOException{
//		
//	}
	
	public boolean uploadFile(MultipartFile file) {
		boolean f=false;
		
		try {
			
			InputStream is= file.getInputStream();
			byte data[] = new byte[is.available()];
			
			is.read(data);
			
			//write data
			
			FileOutputStream fos= new FileOutputStream(UPLOAD_DIR+File.separator+file.getOriginalFilename());
			
			fos.write(data);
			
			fos.flush();
			fos.close();
			f=true;
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return f;
	}
	

}
