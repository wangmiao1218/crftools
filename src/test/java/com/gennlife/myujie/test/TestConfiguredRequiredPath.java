package com.gennlife.myujie.test;

import org.junit.Test;

import com.gennlife.crf.bean.Excel;
import com.gennlife.myujie.ConfiguredRequiredPath;

public class TestConfiguredRequiredPath {

	private String filePath = "E:\\yujie\\7";
	
	private String fileName = "模板结构-安贞心血管(1).xlsx";
	private String fileName2 = "安贞心血管CRF1.1.7-20171107.xls";
	
	private String sheetName = "总体结构";
	private String sheetName2 = "患者信息";

	@Test
	public void writeRequiredPath(){
		Excel excelmb = new Excel(filePath, fileName, sheetName);
		Excel excel = new Excel(filePath, fileName2, sheetName);
		ConfiguredRequiredPath.writeRequiredPath(excelmb, excel);
		System.out.println("ok");
	}
	/*
	@Test
	public void test1(){
		Excel excel = new Excel(filePath, fileName2, sheetName2);
		//获取中文名称一列（用readExcelOfListReturnListMap，因为有重复值）(除表头)
		List<Map<Integer,String>> list = ExcelUtils.readExcelOfListReturnListMap(excel, 3);
		for (int i = 1; i < list.size(); i++) {
			Map<Integer, String> map = list.get(i);
			//定义“联动”列的行号和内容（即：写入值时对应的行号）
			Integer writeContentRowNum=null;
			String allString=null;
			for (Map.Entry<Integer, String> entry : map.entrySet()) {  
				writeContentRowNum=entry.getKey();
				allString=entry.getValue();
				
				
				System.out.println(writeContentRowNum+"=="+allString);
			}
		}
		System.out.println("ok");
	}
	*/
	
}