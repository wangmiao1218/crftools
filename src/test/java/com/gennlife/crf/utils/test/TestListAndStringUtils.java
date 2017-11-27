package com.gennlife.crf.utils.test;

import org.junit.Test;

public class TestListAndStringUtils {
	
	private String filePath = "E:\\安贞\\！安贞心血管";
	private String fileName = "参会医院名称更改0923－添加上级科室.xlsx";
	private String sheetName = "Sheet1";
	
	@Test
	public void chNamesListFilter(){
		String value=" 剂  量（mg/天）a，d ff,d sdf,dfdsf，fsf、bc：1.2.3.bcd？";
		//去掉中英文（）之间
		if (value.indexOf("（")!=-1) {
			value=value.replaceAll(value.substring(value.indexOf("（"),value.indexOf("）")+1),"");
		}
		if (value.indexOf("(")!=-1) {
			value=value.replaceAll(value.substring(value.indexOf("("),value.indexOf(")")+1),"");
		}
		//去掉中英文:之后
		if (value.indexOf("：")!=-1) {
			value = value.substring(0, value.indexOf("："));
		}
		if (value.indexOf(":")!=-1) {
			value = value.substring(0, value.indexOf(":"));
		}
		
		//去掉中英文？之后
		if (value.indexOf("？")!=-1) {
			value = value.substring(0, value.indexOf("？"));
		}
		if (value.indexOf("?")!=-1) {
			value = value.substring(0, value.indexOf("?"));
		}
		
		//删掉、
		if (value.indexOf("、")!=-1) {
			value = value.replace("、",""); 
		}
		
		//删掉空格
		if (value.indexOf(" ")!=-1) {
			value = value.replace(" ",""); 
		}
		
		//删掉中引文，
		if (value.indexOf("，")!=-1) {
			value = value.replace("，","");
		}
		if (value.indexOf(",")!=-1) {
			value = value.replace(",","");
		}
		
		System.out.println(value);
	}
	
}